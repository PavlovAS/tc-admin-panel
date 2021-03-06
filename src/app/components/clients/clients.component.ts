import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService
      .getClients()
      .subscribe(clients => (this.clients = clients));
  }
}
