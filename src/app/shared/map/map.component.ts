import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ListComponent } from '../list/list.component';

L.Icon.Default.imagePath = '/assets/leaflet/images/';

export interface Coords {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('mapContainer') mapContainer: ElementRef;

  @Output() mapClick = new EventEmitter<Coords>();

  constructor(private list: ListComponent) { }

  ngOnInit() {

    const map = L.map(this.mapContainer.nativeElement).setView([51.505, -0.09], 13);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png`', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    map.on('click', (e) => {
      this.mapClick.next(e.latlng);
    });

  }

}
