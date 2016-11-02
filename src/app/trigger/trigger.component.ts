import { TriggerService } from './../services/trigger.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Trigger } from './../model/trigger';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css']
})
export class TriggerComponent implements OnInit {
  trigger: Trigger;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private triggerService: TriggerService
  ) { }

  ngOnInit() {
    if (this.triggerService.triggers === undefined) {
      this.getTriggers();
    } else {
      this.getTrigger();
    }
  }

  getTriggers(): void {
    this.triggerService
      .getTriggers()
      .then(triggers => {
        this.getTrigger()
      });
  }

  getTrigger(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.trigger = this.triggerService.getTrigger(id);
    });
  }
}
