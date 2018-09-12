import { BasicResponse } from '../../../core/responses/basic.response';
import Customer from '../../../models/Customer';
import { DefinitionProperty } from '../../../swagger';

export class CustomersResponse extends BasicResponse<Customer[]> {
  @DefinitionProperty({ arrayType: Customer })
  public data: Customer[];
}