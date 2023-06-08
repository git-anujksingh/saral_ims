export class ProductCategory {
    uid = "";
    name = "";
    referenceId = "";
    status = Status.Active;
    createdDate?: Date;
  }
  
  export enum Status {
    Active = 'Active',
    InActive = 'InActive',
  }
  
  