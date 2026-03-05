import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-students',
  imports: [],
  templateUrl: './search-students.html',
  styleUrl: './search-students.scss',
})
export class SearchStudents {

  #route = inject(Router);

  newStudent() {
    this.#route.navigate(['/students/new']);
  }

}
