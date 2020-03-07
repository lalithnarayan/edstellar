import imgApi from '../images/photos';
// const productData = [
//   {
//     id: '1',
//     name: 'Cras convallis lacus orc',
//     thumbnail: imgApi[21],
//     desc: 'Curabitur egestas consequat lorem, vel fermentum augue porta id.',
//     ratting: 4,
//     price: 30,
//     prevPrice: 0,
//     discount: '',
//     soldout: false,
//   },
//   {
//     id: '2',
//     name: 'Vivamus sit amet interdum elit',
//     thumbnail: imgApi[22],
//     desc: 'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.',
//     ratting: 0,
//     price: 15,
//     prevPrice: 150,
//     discount: '90%',
//     soldout: false,
//   },
//   {
//     id: '3',
//     name: 'Fusce placerat enim et odio molestie sagittis',
//     thumbnail: imgApi[23],
//     desc: 'Duis tristique metus magna, lobortis aliquam risus euismod sit amet',
//     ratting: 5,
//     price: 30,
//     prevPrice: 0,
//     discount: '',
//     soldout: true,
//   },
//   {
//     id: '4',
//     name: 'Pellentesque ac bibendum tortor',
//     thumbnail: imgApi[24],
//     desc: 'Nam posuere accumsan porta',
//     ratting: 2,
//     price: 80,
//     prevPrice: 100,
//     discount: '20%',
//     soldout: false,
//   },
//   {
//     id: '5',
//     name: 'Curabitur egestas consequat lorem',
//     thumbnail: imgApi[25],
//     desc: 'Aenean sit amet magna vel magna fringilla fermentum',
//     ratting: 5,
//     price: 50,
//     prevPrice: 0,
//     discount: '',
//     soldout: false,
//   },
//   {
//     id: '6',
//     name: 'Aenean facilisis vitae purus facilisis semper',
//     thumbnail: imgApi[26],
//     desc: 'Vestibulum bibendum nisi eget magna malesuada',
//     ratting: 4,
//     price: 75,
//     prevPrice: 100,
//     discount: '25%',
//     soldout: false,
//   },
//   {
//     id: '7',
//     name: 'Aenean sit amet magna vel magna fringilla fermentum',
//     thumbnail: imgApi[27],
//     desc: 'Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.',
//     ratting: 5,
//     price: 20,
//     prevPrice: 16,
//     discount: '20%',
//     soldout: false,
//   },
//   {
//     id: '8',
//     name: 'Ut sed eros finibus',
//     thumbnail: imgApi[28],
//     desc: 'Curabitur egestas consequat lorem, vel fermentum augue porta id.',
//     ratting: 1,
//     price: 30,
//     prevPrice: 0,
//     discount: '',
//     soldout: false,
//   },
//   {
//     id: '9',
//     name: 'Nulla lobortis nunc vitae nisi',
//     thumbnail: imgApi[29],
//     desc: 'Sed mi neque, convallis at ipsum at, blandit pretium enim',
//     ratting: 4,
//     price: 50,
//     prevPrice: 100,
//     discount: '50%',
//     soldout: false,
//   },
//   {
//     id: '10',
//     name: 'Nam posuere accumsan',
//     thumbnail: imgApi[30],
//     desc: 'Integer id orci sed ante tincidunt tincidunt sit amet sed libero.',
//     ratting: 5,
//     price: 30,
//     prevPrice: 0,
//     discount: '',
//     soldout: true,
//   },
//   {
//     id: '11',
//     name: 'Cras convallis lacus orc',
//     thumbnail: imgApi[37],
//     desc: 'Curabitur egestas consequat lorem, vel fermentum augue porta id.',
//     ratting: 4,
//     price: 66,
//     prevPrice: 200,
//     discount: '67%',
//     soldout: false,
//   },
// ];

const productData = [{
  "id": 1,
  "name": "SAP HANA",
  "thumbnail": "https://xmpro.com/wp-content/uploads/2018/01/SAP-HANA-Logo.jpg",
  "desc": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "ratting": 3,
  "price": 58,
  "discount": 16,
  "soldout": true
}, {
  "id": 2,
  "name": "Frontend Developement with Ruby on Rails",
  "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW4AAACKCAMAAAC93lCdAAAAkFBMVEX////MAADJAADrra3kk5PwwMDzz8/wycnrr6/55eXZYWHfeXnNAADYV1ffd3fhg4PWTEz+9/fQMTH339/77u7aZmbuurrRLS388fHmmpr119fghYXQJibXUVH++vrQISHopKTUQkLjj4/TPDzOEBDZY2PcbW3PGRnSODjRKSnnoKDmmZnODg7xxMTTQEDYW1szNfrvAAAL7klEQVR4nO2d6XqqMBCGZdzrggi1Hvetaq2t9393RxLCkgWSAEqR78/pc4AQXkMymZmEWq1SpUqVKlWqVKlSpdy1clo/zfrlu/PsiryGtuDp2RV5DdXBQIL2s2vyEnII7t6za/Ia2hqenl2R19Dm3m8b/eup30o4cWo9pD4llzWzViuZEydw61TEH6b7oAowmDy7Gq+ibzSogrGrmrhYdTP+uGXbP5d/d5nm3P3n0rZtPk+T2DBJnfzrqrkGMR17Ml/e6bEyjPG80e5Spw8JbjvnSv9VzX5dQmveoW79E4MVyT06mE9CDb1h4NNh+qj6/yk5Rw/PnD4ym3/EkY4w/+hNHO8yazJwL4Oq7+ZpRojCLPzf3d1JjnXAfLwjJUw3CzAq3FztCNVQdzLZq7EmxA2TDAGznpSV/oL68mANvO7AIt2vhgD65iz+dq8u1J3Ar0ep29Np2BHiHxcn/o6vLfMO2JsGOsOUsD3ig8pRK9bVxB3t1MwCNiZ+ulSdt0AemO/MYCPghklPgSoFap6yhI2Aw2c1teTL2WYNGxMfVHYKR41cYCPgywo4pdlHbrRd4LeqSwlrlydsBPy98lcR2bk2bQJ8XpmFSJsHwHZ5G/VnP2kBtHp7DG0X+Pnlx0w704lNIvDjaztlO9nA9oNpob/4JxqvnNLZS03bRTt4r3d+nLum06n7T7NTf78dBNBh+6oT+9U5raMV9vMfoau1XR8aPOTw/ciHLIzsfjrWBzPZx+o0ewcGOSxecNbTTtO04TAXWhn2zInMaewLE4iDf/k/X7FU16cNcItr167L/LQ/XtqBFeJszlHicH6tHlx/2g4w91FxJ4pDcl4kT6i7i8Y/obwmijWk/2euSxsMP0bT/Xc+8e52JKfSDbg5CjdxuJV0Vm99wG90enHUpA1XMhG3Ots7O25e2oCczHql7HDUGfqlnGRa6/uzncL22k2PNsCFFDnEPQM0OPdbE4ubN4OchuNzZRwxrQN+tKApDTRph2bgxIb84NywNak3zO0JQNBZXIJOHJZl61CsL/JoJMF9qUUbTuGRj/T9MVmujjjf+F9o1CyXCb4aB8Bwv6vXtqkFZ15eIYCeU3W187uUclkoXwHcNRq6PvVo/1DlnlzWv/prcKZDn3eZVg5efLp9RHuoQxvOjJFhgtFL1w/YI9IhjUrklf2J9LJa9jYwZvu9N8lg5c3k6tXmUKIppo2RoWm3VnYD7HKrm//rlyih0Brf5yMb96+JFu08l+zZe2/MLdOA+Ya7Ay0fIDNIZixvcMnxFXq80OSvqwE7d9r3auFkuVIZKHetDtq0u/k6N3DmBXzmepNHa6tDG3WpTp/r+ctO3TGKKm/zvctDpRMFxkv/pn3OGsCM5brfyzRc6mQ4wJt7pXUy6DWAOahlGGUyvnWMki906Rn9vci7htMy+QZ1gu44GvNZQkMtb+nEE3BXGrwWZWp9+Uorx/UNX0u2yyiXXzpPaXXcfmteoKZeyrBiPlprwA48JW4kIVe/Sclk6jTuUfj63M3uEknPMRU2gmEkLLwSpdVVh3ZkY6oWNQGZcPZJotS/XWTGVnvybfYYmZsmd+HU95DS0RtR7CN9RD6jYjXr7Ngq+DoqbqillcIdv9FOU6ZIgPEm3nacucmxIu3/sYnMS+YsLyrRYg7cJOm0jv2EhqM2arW0aPOydQJJ4TbQ3nbiQpxB/DIVgCMNfMCc4+Omj7xJwZklL5RWxK3TlRiihBxPsrhd4KLaSiTgAp13nzVumTC5Gm694GR841bA7aZecYuQC1HDMtKpZYvbkVpNqoS7q5dUkrDCVwW3AWfOOCCb7gyL8MWZ4u7KuZGUcDMVlLpDUhhLCbdhrBneCiHqcU64p5JOOxXcP3qNO8mEU8Rt7KnrHZXKhHJcssS9l72/Au6TwnMFSoxhqeKmX5c3pYtDmbvMMW3c/2QfQQH3Ra9xJ8awVHFT32uYqV0eTGmzw23J21bSuOXLjN4gMRtNGXc0FnRTrI/ft2WHW35lkjxuzSXByfkH6rjDlVZtBUEcKTvc8r2sNG49I1CmfHXc4VUOyisMfzPHrdCdSeM+JpfFLd+99jt2WqmBO2TtKA2USKQymeGWHijlcSsOSL5c584KFnFZCDq4A+8JN5nL9wjxjpG6ZIb7XaHikri1ZjieXXKfhkBTAfd1/BESdzfCM7l4yrnnoVfvYG0476Rv12SGe0SXo+oRZKbduo0bNSV33W9MpgODmwo/fPPuTewddkiJeqKmW+Y4yQrNDPdX9OTt3BSqxw3SjvqN6OtP/4CyQiYbmuBS/iEF3LzIv995M7jpyNyKuZS8aJnhjgZvIeEjH6y67qdqtpvAQazbuA13zuxF7kFU50TcnB/bfylZ3MynMugTCocbR38BbsKaSQp13V7jFK7pTcbNxkfx8okaDzcdRaCds4XDHbx/YCBftXbjRk3Nm/YJv+ySjLvGFkx+u2TcdOZA4XCH+krs8VCwdKJCidzenEsY05HAzfQmZcK9CK7tcx9JWi44knR1Ft1OAvcnQ6Y8uEM9JY57aW+gFrmcH/aqSeFmXq9C4Y4agqpJSyEXG6q7pivQ8O0HFG3xd9NgJIF7yZS88Y4UAXeClXy9zX/EXgwndDPUIrnTDCkR69g+xc0rtYZKsSH4eNyJQxuAMRTFtELRdmxM6G9Y54+O1hIYe1gBN2sZ+UGZIuCWcVGBaAPVRt+/GgVStdYGewpKnYvj8cm4Wa+fD7UIuOVynUC0dLx99PYqQlbgVqYsvsLcmsLuKxE3x2V4JceKgFs2vOAPOLSsydLdicv9Uy95HkvOJGJoLhNpB2ZOIXBL57mIeN9HzMsBPZP2nnXSJhGDczEP651TgcCPWQjc0rYbCPoTJPT6p2jckr50tvVGPMTckv1hpxC4FVYrJQTK0+zIHftbxuFO1Lt/cTFw10ay3UlCStlWEgC37Lxwh3JzWNx0+8nfI1jz1kJLVT3224T67hKD43rOCncou52t4Nt7VGPqeC64a47kF8fixzP9GaXhReFzwB3+GdXbQz64a5Zkf9KPK2SRfH3Mg+WDO2JOFQa3O7mUqUtchqp2XAGXnAvuaEZ9gXDXHJnvzsblTKYwul3lgZsKeRYJ971HqY+YtAf6JjFrOfRSjIliuylN3LQlVSzcd63s9mQyQVkuEyQ61UU81U7Xl+SAm10LVTjcjGh/oTDMkrYvOcjVRxo3gMlMyoqPmzbuxLhVn4SS5A5fcrgBzhvODLhEuNM4A11l2bqBx7pWKtwKibRcZdp3H/iz3xLhPqs+CSWE207cBUm27+a6BMqD20nZuLHd3YNewi4H0kMlj/djcKfZcZNeQSbCnSZIiavvltIAA9a7uLWV0rj7nP7kMbgPY77w6LS63TXAWmKNsLbb7YhKRzZELlg6dVRZCDfyvLvbYyiEhkXfc+DwfgxuYVnofEvp9qJZpc6eU2xlyDsi/BALL1a5l+ZdCNwqqSGir3mkcnXjkt0G7afACV1hnEj86kNQJMP77+EWbDKX/kO2KCvIdwQIt+7mJT5YIs/vleLNWSwS7yJ6Om4BBc2VfeGS3er79o1aOr0l6soo+5sNnnVaEc169AnPxS0yTHS2Q6cqg6qfeCN+Ws9UtDHQITLmJi8WoSdrz8UtWlQwTd2XeGvA/G5hrYS75oge4hTmzeKmh4hi4f6t8aW3eUm0MmbkqUS9lihpTfhxh3WI9x/DLdyNNaXzFamHCyKmoOBWwhxBIe9Q+/5buMUrG3QXm4WFPbD2bo2IiyxOcUqm0CW5jsmiKjDumP1BM2jcQbCy1TOA+/GteNzicNJCuGq4wLiB3tYpUPpJjhG1EpqfIHDIxiUcJ/L+Q7jhvSZUyjCld4NIb23V+W6T2Pxu4Q6/X9bfwg1G3C5RehtP0beQ+tpnfDq90ELCvP8IbjDmsbmvu4StY+UkleDdpK/6jT9MhOyTLvPfNO4GfQLBPWIu9XC35R8Q4048bdBJCLJ0do302m1kcHc39aio5IZ2na+Ny82iL2YcvTP6BDKgNMmuJ0R174hDHxAKv70rQQWxOu3qOxOVKlWqVKlSpYLrP7ac0AxVxnV/AAAAAElFTkSuQmCC",
  "desc": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "ratting": 3,
  "price": 27,
  "discount": 5,
  "soldout": true
}, {
  "id": 3,
  "name": "Toughjoyfax",
  "thumbnail": "http://dummyimage.com/209x178.png/dddddd/000000",
  "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "ratting": 2,
  "price": 94,
  "discount": 10,
  "soldout": false
}, {
  "id": 4,
  "name": "Redhold",
  "thumbnail": "http://dummyimage.com/235x246.png/dddddd/000000",
  "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  "ratting": 1,
  "price": 61,
  "discount": 33,
  "soldout": true
}, {
  "id": 5,
  "name": "Bitwolf",
  "thumbnail": "http://dummyimage.com/193x111.bmp/5fa2dd/ffffff",
  "desc": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "ratting": 5,
  "price": 64,
  "discount": 52,
  "soldout": true
}, {
  "id": 6,
  "name": "Bytecard",
  "thumbnail": "http://dummyimage.com/114x188.bmp/ff4444/ffffff",
  "desc": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "ratting": 3,
  "price": 78,
  "discount": 83,
  "soldout": false
}, {
  "id": 7,
  "name": "Overhold",
  "thumbnail": "http://dummyimage.com/185x198.jpg/dddddd/000000",
  "desc": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "ratting": 5,
  "price": 86,
  "discount": 59,
  "soldout": false
}, {
  "id": 8,
  "name": "Flowdesk",
  "thumbnail": "http://dummyimage.com/154x188.bmp/dddddd/000000",
  "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "ratting": 1,
  "price": 79,
  "discount": 62,
  "soldout": false
}, {
  "id": 9,
  "name": "Bitchip",
  "thumbnail": "http://dummyimage.com/104x249.png/5fa2dd/ffffff",
  "desc": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "ratting": 4,
  "price": 26,
  "discount": 76,
  "soldout": false
}, {
  "id": 10,
  "name": "Lotstring",
  "thumbnail": "http://dummyimage.com/162x165.png/ff4444/ffffff",
  "desc": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "ratting": 5,
  "price": 26,
  "discount": 60,
  "soldout": true
}]

export default productData;
