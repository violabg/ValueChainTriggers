import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TriggerService } from './services/trigger.service';
import { Trigger } from './model/trigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';
  triggerId: number = 0;

  triggers: Trigger[];
  selectedTrigger: Trigger;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private triggerService: TriggerService
  ) {
  }

  getTriggers(): void {
    this.triggerService
      .getTriggers()
      .then(triggers => {
        this.triggers = triggers;
        this.selectedTrigger = triggers[this.triggerId];
        this.router.navigate(['/trigger', this.selectedTrigger.id]);
      });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      if (!isNaN(id)) {
        this.triggerId = id
      }
    });
    this.getTriggers();
  }
}
