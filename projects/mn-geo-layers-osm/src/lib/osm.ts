import { Layer } from '@modalnodes/mn-geo-layers';
import * as L from 'leaflet';

export class OsmTiles extends Layer {
    osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';

    constructor() {
        super();
        this.setRequiresDatasources(false);
    }

    create(): any {
        const r = L.tileLayer(this.osmUrl, { minZoom: 1, maxZoom: 19, attribution: this.osmAttrib });
        return r;
    }
}

export class OsmVectors extends Layer {
    constructor() {
        super();
        this.setRequiresDatasources(false);
    }

    create() {
        return {};
    }
}

export class OsmOverpass extends Layer {
    constructor() {
        super();
        this.setRequiresDatasources(true);
    }

    create() {
        return {};
    }
}
