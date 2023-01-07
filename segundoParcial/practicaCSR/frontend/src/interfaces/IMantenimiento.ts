// Generated by https://quicktype.io

export interface IResMantenimiento {
    sum:     number;
    mantenimientos: Mantenimiento[];
}

export interface Mantenimiento {
    precio: any;
    detalle: string;
    fechaMantenimiento: string;
    idConcepto: string;
    idVehiculo: string;
    _id?:    string;
    minimum: number;
    category?:  number;
    __v?:    number;
}
