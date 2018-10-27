import { Component, OnInit } from '@angular/core';
import { SearchProfilesService } from '../search-profiles.service';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  place: string;

  results: any[] = []; // Store data in results from the service
  selected: boolean = false; // To identified if user is already selected
  selectedUser: any; // Details of selected user
  selectedProfile: import("/home/elias/Github-search/node_modules/@angular/http/src/static_response").Response;

  constructor(private searchService: SearchProfilesService) { }
  ngOnInit() { }

  search(place: string) {
    this.selected = false;
    if (place) {
      this.place = place;
      this.searchService.getProfilesByPlace(place).subscribe(
        profiles => {
          this.results = profiles;
        },
        error => {
          this.results = [];
          console.error(error);
        }
      );
    } else {
      this.results = [];
    }
  }

  getDetails(profilename: string) {
    this.searchService.getDetailsByProfileName(profilename).subscribe(
      profileDetails => {
        this.selectedProfile = profileDetails;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }

}