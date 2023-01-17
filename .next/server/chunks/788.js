"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API = "https://api.escuelajs.co";
const VERSION = "v1";
const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`
    },
    products: {
        getProduct: (id)=>`${API}/api/${VERSION}/products/${id}/`,
        allProducts: `${API}/api/${VERSION}/products`,
        getProducts: (limit, offset)=>`${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/api/${VERSION}/products`,
        updateProduct: (id)=>`${API}/api/${VERSION}/products/${id}/`,
        deleteProduct: (id)=>`${API}/api/${VERSION}/products/${id}/`
    },
    categories: {
        getCategoriesList: `${API}/api/${VERSION}/categories/`,
        addCategory: `${API}/api/${VERSION}/categories/`,
        getCategoryItems: (id)=>`${API}/api/${VERSION}/categories/${id}/products/`,
        updateCategory: (id)=>`${API}/api/${VERSION}/categories/${id}/`
    },
    files: {
        addImage: `${API}/api/${VERSION}/files/upload/`
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endPoints);


/***/ })

};
;