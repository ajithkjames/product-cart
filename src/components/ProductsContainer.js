import * as React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Title from './Title';
import ProductCard from './ProductCard';
import Loader from './Loader';

export default function ProductsContainer() {
    const { isLoading, isError, data, error, refetch } = useQuery(
        'products',
        async () => {
            const { data } = await axios('https://fakestoreapi.com/products');
            return data;
        }
    );
    return (
        <React.Fragment>
            <Title>All Products</Title>
            {isLoading ? (
                <Loader />
            ) : (
                data?.map((product, index) => {
                    return <ProductCard key={product.id} product={product} />;
                })
            )}
        </React.Fragment>
    );
}
