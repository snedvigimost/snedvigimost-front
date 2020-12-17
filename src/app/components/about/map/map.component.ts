import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';

import {ListingsService} from '../../../rest/listings/listings.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;

  center: google.maps.LatLngLiteral = {
    lat: 50.437665,
    lng: 30.5205651
  };
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [this.center];
  display?: google.maps.LatLngLiteral;

  ngOnInit() {
  }

}
