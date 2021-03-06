import { EventEmitter } from '@angular/core';
import { MnRegistryService } from '@modalnodes/mn-registry';

export interface ILayer {
    getName(): string;
    setName(name: string);
    
    getType(): string;

    setConfiguration(conf: any);
    getConfiguration(): any;

    create(): any;

    getDatasourceRepo(): MnRegistryService<any>;
    getRequiresDatasources(): boolean;

    featureClicked(feat: any);
}

export interface ILayerConfigurator {
    setType(type: string);
    setDatasourceRepo(repo: any);
    setRequiresDatasources(b: boolean);
    setClickable(ee: EventEmitter<any>);
}

export abstract class Layer implements ILayer, ILayerConfigurator {
    private _name: string;
    private _type: string;
    private _conf: any;


    private _repo: MnRegistryService<any>;
    private _requiresDS: boolean;

    private _ee: EventEmitter<any>;

    setName(name: string) {
        this._name = name;
    }
    getName() {
        return this._name;
    }

    setConfiguration(conf: any) {
        this._conf = conf;
    }
    getConfiguration(): any {
        return this._conf;
    }

    getType() {
        return this._type;
    }

    setType(type: string) {
        this._type = type;
    }

    setDatasourceRepo(repo: MnRegistryService<any>) {
        this._repo = repo;
    }
    getDatasourceRepo(): MnRegistryService<any> {
        return this._repo;
    }

    setRequiresDatasources(b: boolean) {
        this._requiresDS = b;
    }
    getRequiresDatasources(): boolean {
        return this._requiresDS;
    }

    setClickable(ee: EventEmitter<any>) {
        this._ee = ee;
    }

    featureClicked(feat) {
        this._ee.emit(feat);
    }

    abstract create(): any;
}
