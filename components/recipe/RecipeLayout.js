import React from 'react';
import Header from '../header/Header';
import Breadcrumb from '../Breadcrumb';

export default function RecipeLayout({ children, recipe }) {
    return (
        <>
            <Header recipe={recipe}/>
            <Breadcrumb recipe={recipe} />
            <main>{children}</main>
        </>
    );
}