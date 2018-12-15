export interface Client{
    $key?:string;
    firstName:string;
    lastName?:string;
    email?:string;
    phone?:string;
    vehicleNo:string;
    millage?:number;
    role?:Roles;
    password? : string;

}

export interface Roles{
    user:string;
    admin:string;
}