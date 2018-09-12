import * as HttpStatus from 'http-status-codes';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { validateBody, validateParams } from '../../core/middleware/validate.middleware';
import { postDefinition, putDefinition, getDefinition, deleteDefinition } from '../../swagger';
import { isAdmin } from '../users/middleware/acl.middleware';
import CustomerService from './customers.service';
import { CustomerIdDto } from './dto/customer-id.dto';
import { CustomerDto } from './dto/customer.dto';
import { CustomerResponse } from './responses/customer.response';
import { CustomersResponse } from './responses/customers.response';

getDefinition({ path: '/customers', responses: { [HttpStatus.OK]: CustomersResponse } });
const getAllCustomers = async (ctx: Context) => {
  const data = await CustomerService.getAllCustomers();
  ctx.status = HttpStatus.OK;
  ctx.body = new CustomersResponse(data);
};

getDefinition({
  path: '/customer/{CustomerIdDto}', params: CustomerIdDto, responses: { [HttpStatus.OK]: CustomerResponse },
});
const getCustomer = async (ctx: Context) => {
  const { id } = ctx.params as CustomerIdDto;
  const data = await CustomerService.findCustomerById(id);
  ctx.status = HttpStatus.OK;
  ctx.body = new CustomerResponse(data);
};

postDefinition({ path: '/customer', body: CustomerDto, responses: { [HttpStatus.OK]: CustomerResponse } });
const createCustomer = async (ctx: Context) => {
  const customerData = ctx.request.body as CustomerDto;
  const data = await CustomerService.createCustomer(customerData);
  ctx.status = HttpStatus.OK;
  ctx.body = new CustomerResponse(data);
};

putDefinition({
  path: '/customer/{CustomerIdDto}',
  params: CustomerIdDto,
  body: CustomerDto,
  responses: {
    [HttpStatus.OK]: CustomerResponse,
  },
});
const updateCustomer = async (ctx: Context) => {
  const { id } = ctx.params as CustomerIdDto;
  const profileData = ctx.request.body as CustomerDto;
  const data = await CustomerService.updateCustomerInfo(id, profileData);
  ctx.status = HttpStatus.OK;
  ctx.body = new CustomerResponse(data);
};

deleteDefinition({
  path: '/customer/{CustomerIdDto}',
  params: CustomerIdDto,
  responses: {
    [HttpStatus.OK]: CustomerResponse,
  },
});
const deleteCustomer = async (ctx: Context) => {
  const { id } = ctx.params as CustomerIdDto;
  const data = await CustomerService.removeCustomer(id);
  ctx.status = HttpStatus.OK;
  ctx.body = new CustomerResponse(data);
};

export default () => {
  const customersController: Router = new Router();
  customersController.get('/customers', getAllCustomers);
  customersController.get('/customer/:id', validateParams(CustomerIdDto), getCustomer);
  customersController.post('/customer', isAdmin(), validateBody(CustomerDto), createCustomer);
  customersController.put(
    '/customer/:id',
    isAdmin(),
    validateParams(CustomerIdDto),
    validateBody(CustomerDto),
    updateCustomer,
  );
  customersController.delete('/customer/:id', isAdmin(), validateParams(CustomerIdDto), deleteCustomer);
  return customersController.routes();
};