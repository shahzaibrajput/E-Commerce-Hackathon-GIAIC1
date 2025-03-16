

// export interface Product {
//     _id : string;
//    name : string;
//   // params: { slug: string };
//     _type : 'product';
//     image? : {
//         asset : {
//             _ref : string;
//             _type : 'image';

//         }
//     };
//     price : number;
//     description? : string;
//      slug : {
//         _type : 'slug'
//         current : string;
//      };

// }

//gpt 
export interface Product {
    _id: string;
    name: string;
    _type: 'product';
    image?: {
      asset: {
        _ref: string;
        _type: 'image';
      };
    };
    price: number;
    description?: string;
    isHot?: boolean;
    slug: {
      _type: 'slug';
      current: string;
    };
    quantity: number;
  }
  
  