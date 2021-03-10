import React from 'react';
import Header from '../header/Header';
import Breadcrumb from '../Breadcrumb';

export default function RecipeLayout({ children }) {
    return (
        <>
            <Header />
            <Breadcrumb />
            <main>{children}</main>
        </>
    );
}