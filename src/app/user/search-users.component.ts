import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css'],
})
export class SearchUsersComponent {
  searchText = '';
  users: any[] = [];
  errorMessage = '';
  alertType = 'warning'; // Agrega la propiedad alertType y asigna un valor predeterminado

  trackByUserId(index: number, user: any) {
    return user.id;
  }

  searchUsers() {
    this.errorMessage = '';
    this.users = [];
    if (this.searchText.length < 4) {
      this.errorMessage = 'El texto de búsqueda debe tener al menos 4 caracteres.';
      return;
    }

    if (this.searchText.toLowerCase() === 'doublevpartners') {
      this.errorMessage = 'La palabra "doublevpartners" no está permitida.';
      return;
    }

    if (this.errorMessage === '') {
      axios.get(`https://api.github.com/search/users?q=${this.searchText}&per_page=10`)
        .then(response => {
          this.users = response.data.items;
          this.errorMessage = '';
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Error al obtener los usuarios de GitHub.';
        });
    }
  }

  searchView() {
    if (this.searchText.toLowerCase() === '') {
      this.users = [];
    }
  }
}
