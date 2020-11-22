import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {ListingsService} from '../../rest/listings/listings.service';
import {Chart} from '@antv/g2';

const data = [
  {month: 'Jan', city: 'Tokyo', temperature: 7},
  {month: 'Jan', city: 'London', temperature: 3.9},
  {month: 'Feb', city: 'Tokyo', temperature: 6.9},
  {month: 'Feb', city: 'London', temperature: 4.2},
  {month: 'Mar', city: 'Tokyo', temperature: 9.5},
  {month: 'Mar', city: 'London', temperature: 5.7},
  {month: 'Apr', city: 'Tokyo', temperature: 14.5},
  {month: 'Apr', city: 'London', temperature: 8.5},
  {month: 'May', city: 'Tokyo', temperature: 18.4},
  {month: 'May', city: 'London', temperature: 11.9},
  {month: 'Jun', city: 'Tokyo', temperature: 21.5},
  {month: 'Jun', city: 'London', temperature: 15.2},
  {month: 'Jul', city: 'Tokyo', temperature: 25.2},
  {month: 'Jul', city: 'London', temperature: 17},
  {month: 'Aug', city: 'Tokyo', temperature: 26.5},
  {month: 'Aug', city: 'London', temperature: 16.6},
  {month: 'Sep', city: 'Tokyo', temperature: 23.3},
  {month: 'Sep', city: 'London', temperature: 14.2},
  {month: 'Oct', city: 'Tokyo', temperature: 18.3},
  {month: 'Oct', city: 'London', temperature: 10.3},
  {month: 'Nov', city: 'Tokyo', temperature: 13.9},
  {month: 'Nov', city: 'London', temperature: 6.6},
  {month: 'Dec', city: 'Tokyo', temperature: 9.6},
  {month: 'Dec', city: 'London', temperature: 4.8},
];


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
// export class MapComponent {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
  @ViewChild('myname') input;

  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral = {
    lat: 50.437665,
    lng: 30.5205651
  };
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [this.center];
  display?: google.maps.LatLngLiteral;

  constructor(private listingsService: ListingsService) {
  }


  ngOnInit() {
    // this.infoWindow.positionChanged.subscribe(eke => {
    //   console.log(eke);
    // });

    // @ts-ignore
    this.listingsService.getListings({page_size: 50}).subscribe(listings => {
      console.log(listings);
      const markers = listings.results.map(listing => {
        return {lng: listing.location.coordinates[0], lat: listing.location.coordinates[1]};
      });
      this.markerPositions = this.markerPositions.concat(markers);
      console.log(this.markerPositions);
      console.log(markers);
    });
    const chart = new Chart({
      container: this.input,
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });

    chart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');

    chart
      .point()
      .position('month*temperature')
      .color('city')
      .shape('circle');

    chart.render();


  }

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  onBoundsChanged($event) {
    console.log(this.map.getBounds().getNorthEast().toJSON());
    console.log(this.map.getBounds().getSouthWest().toJSON());
  }
}
