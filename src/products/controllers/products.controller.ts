import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { ProductsService } from '../services/products.service';
import {
  CreateProductDTO,
  UpdateProductDTO,
} from 'src/products/dtos/products.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'It returns a list of products' })
  findAll(): // NOT IMPLEMENTED QUERIES
  // @Query('limit') limit = 100,
  // @Query('offset') offset = 5,
  // @Query('brand') brand: string
  Object {
    return this.productsService.findAll();
  }

  // EJEMPLO: SI QUISIERA PONER UNA RUTA ESTÁTICA TENDRÍA QUE HACERLO ACÁ ARRIBA.
  // @Get('filter')
  // getProductFilter() {
  //   return 'Soy un filter';
  // }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDTO) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDTO,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id - 1);
  }
}
