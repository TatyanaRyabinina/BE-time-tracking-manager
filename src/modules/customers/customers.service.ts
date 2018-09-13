import NotFoundException from '../../core/exceptions/not-found.exception';
import Customer from '../../models/Customer';
import { CUSTOMER_NOT_FOUND } from './customers.constants';
import { CustomerDto } from './dto/customer.dto';

const createCustomer = async (customerData: CustomerDto): Promise<Customer> => {
  return Customer.create(customerData);
};

const findCustomerById = async (id: number): Promise<Customer> => {
  const customer = await Customer.findOne({
    where: { id },
  });
  if (!customer) {
    throw new NotFoundException(CUSTOMER_NOT_FOUND);
  }
  return customer;
};

const getAllCustomers = async (): Promise<Customer[]> => {
  const customers = await Customer.findAll();
  if (!customers) {
    throw new NotFoundException(CUSTOMER_NOT_FOUND);
  }
  return customers;
};

const updateCustomerInfo = async (id: number, profileData: CustomerDto) => {
  const updatingCustomer = await findCustomerById(id);
  return updatingCustomer.update(profileData);
};

const removeCustomer = async (id: number) => {
  const removingCustomer = await findCustomerById(id);
  await removingCustomer.destroy();
  return removingCustomer;
};

export default {
  createCustomer,
  findCustomerById,
  getAllCustomers,
  updateCustomerInfo,
  removeCustomer,
};