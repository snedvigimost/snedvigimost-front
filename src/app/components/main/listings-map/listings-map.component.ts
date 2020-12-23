import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';

import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {ListingsService} from '../../../rest/listings/listings.service';

@Component({
  selector: 'app-listings-map',
  templateUrl: './listings-map.component.html',
  styleUrls: ['./listings-map.component.scss']
})
export class ListingsMapComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
  @Output() bounds = new EventEmitter<google.maps.LatLngBounds | null>();
  @Output() selectedMarkerId = new EventEmitter<number | null>();
  // @Input() markers: google.maps.LatLngLiteral[] = [];
  @Input() markers: any[] = [];
  @Input() hoveredIndex: number;
  actualBounds = new Subject<google.maps.LatLngBounds | null>();

  center: google.maps.LatLngLiteral = {
    lat: 50.437665,
    lng: 30.5205651
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  currentMarkerOption: google.maps.MarkerOptions = {
    draggable: false,
    icon: 'assets/icons8-marker-storm-48.png',
  };

  markerPositions: google.maps.LatLngLiteral[] = [];
  display?: google.maps.LatLngLiteral;
  initial = true;

  constructor(private listingsService: ListingsService) {}

  ngOnInit() {
    // @ts-ignore
    // this.listingsService.getListings({ is_published: true, page_size: 50, in_bbox: '30.407,50.400,30.665,50.488'}).subscribe(listings => {
    //   const markers = listings.results.map(listing => {
    //     return {lng: listing.location.coordinates[0], lat: listing.location.coordinates[1]};
    //   });
    //   this.markerPositions = this.markerPositions.concat(markers);
    // });
    this.actualBounds.pipe(
      debounceTime(300))
      .subscribe((bounds) => {
        this.bounds.emit(bounds);
      });
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker, markerPosition) {
    this.selectedMarkerId.emit(markerPosition.id);
    // this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  onBoundsChanged($event) {
    // TODO: use lifecycle or other subject?
    if (!this.initial) {
      this.actualBounds.next(this.map.getBounds());
    } else {
      this.initial = false;
    }
  }

  onZoomChanged() {
    console.log(this.map.getZoom());
  }

  onMapClick() {
    console.log('onMapClick');
    this.selectedMarkerId.emit();
  }
}
