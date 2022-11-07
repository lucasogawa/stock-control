import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  idParam: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idParam = +this.route.snapshot.paramMap.get('id')!;
    console.log('idParam', this.idParam);
  }
}
