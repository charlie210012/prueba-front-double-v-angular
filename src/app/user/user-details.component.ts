import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @ViewChild('chart') chartCanvas!: ElementRef<HTMLCanvasElement>;

  user: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail() {
    const username = this.route.snapshot.paramMap.get('username');
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        this.user = response.data;
        this.createChart(this.user.followers);
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  createChart(followers: number) {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if(ctx){
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Seguidores'],
          datasets: [
            {
              label: 'Seguidores',
              data: [followers],
              borderColor: 'blue',
              backgroundColor: 'lightblue',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

  }
}
