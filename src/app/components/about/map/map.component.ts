import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {ListingsService} from '../../../rest/listings/listings.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
// export class MapComponent {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;

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
