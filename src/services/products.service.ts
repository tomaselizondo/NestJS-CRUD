import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDTO } from 'src/dtos/products.dto';
import { UpdateProductDTO } from 'src/dtos/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [{
    id: 1,
    name: 'sda',
    description: 'sdfaa',
    price: 23,
    stock: 342,
    image: 'dsaf',
  }];

  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(payload: CreateProductDTO) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: string, payload: UpdateProductDTO) {
    const product = this.findOne(Number.parseInt(id));
    if (product) {
      const index = this.products.findIndex((prod) => prod.id === Number.parseInt(id));
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
  delete(id: number) {
    const product = this.findOne(id);
    this.products.splice(id, 1);
    return product;
  }
}
