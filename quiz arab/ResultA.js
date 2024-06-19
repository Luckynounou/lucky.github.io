document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const answers = [];
    queryParams.forEach((value, key) => {
        answers.push(value);
    });

    const recommendations = {
        a: {
            type: 'دهنية',
            morning: [
                { img: '6.jpg', text: 'واقي الشمس', url: 'https://iherb.co/AyeTNLYe' },
                { img: '7.jpg', text: 'فيتامين سي', url: 'https://iherb.co/8HSvMB2P' },
                { img: '8.jpg', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                { img: '9.jpg', text: 'تونر', url: 'https://iherb.co/rxwxjpFM' },
                { img: '10.jpg', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' }
            ],
            night: {
                routine: [
                    { img: '8.jpg', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: '2.png', text: 'أحماض ألفا وبيتا هيدروكسي', url: 'https://iherb.co/Lt4JWfb' },
                    { img: '11.jpg', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                    { img: '6.jpeg', text: 'منظف زيتي', url: 'https://iherb.co/5ckFXXuE' },
                    { img: '10.jpg', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' }
                ],
                special: [
                    
                    { img: 'AR2.png',},
                    { img: 'AR3.png',},
                    { img: 'AR4.png',},
                    { img: 'AR5.png',},
                    { img: 'Day 5.png',}
                ]
            }
        },
        b: {
            type: 'جافة',
            morning: [
                { img: 'D4.png', text: 'واقي الشمس', url: 'https://iherb.co/y8qsfZTW' },
                { img: 'D2.png', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                { img: 'D5.png', text: 'سيروم', url: 'https://iherb.co/8HSvMB2P' },
                { img: 'D1.png', text: 'تونر', url: 'https://iherb.co/rxwxjpFM' }
            ],
            night: {
                routine: [
                    { img: 'D3.png', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: 'D5.png', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                    { img: 'D1.png', text: 'تونر', url: 'https://iherb.co/Lt4JWfb' },
                    { img: 'N1.png', text: 'منظف', url: 'https://iherb.co/iGopBp9' },
                    { img: 'N2.png', text: 'بلسم', url: 'https://iherb.co/Mv4QLsG' }
                ],
                special: [
                    { img: 'AR1.png',},
                    { img: 'AR3.png',},
                    { img: 'AR4.png',},
                    { img: 'AR5.png',},
                    { img: 'Day 5.png',}
                ]
            }
        },
        c: {
            type: 'مختلطة',
            morning: [
                { img: '6.jpg', text: 'واقي الشمس', url: 'https://iherb.co/AyeTNLYe' },
                { img: 'D2.png', text: 'مرطب', url: 'https://iherb.co/kjt4vRkK' },
                { img: '11.jpg', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                { img: 'Co2.png', text: 'تونر', url: 'https://iherb.co/z1fqmXJV' },
                { img: 'Co1.png', text: 'منظف', url: 'https://iherb.co/2j63KVnA' }
            ],
            night: {
                routine: [
                    { img: '8.jpg', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: '2.png', text: 'أحماض ألفا وبيتا هيدروكسي', url: 'https://iherb.co/Lt4JWfb' },
                    { img: '11.jpg', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                    { img: '10.jpg', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' },
                    { img: '6.jpeg', text: 'منظف زيتي', url: 'https://iherb.co/5ckFXXuE' }
                ],
                special: [
                    { img: 'AR2.png',},
                    { img: 'AR3.png',},
                    { img: 'AR4.png',},
                    { img: 'AR5.png',},
                    { img: 'Day 5.png',}
                ]
            }
        },
        d: {
            type: 'حساسة',
            morning: [
                { img: 'Se3.png', text: 'واقي الشمس', url: 'https://iherb.co/VWwd2qG8' },
                { img: 'Se2.png', text: 'مرطب', url: 'https://iherb.co/z3y7Xutn' },
                { img: 'Se1.png', text: 'سيروم/مقشر', url: 'https://iherb.co/QmK34cVe' }
            ],
            night: {
                routine: [
                    { img: 'D3.png', text: 'مرطب', url: 'https://iherb.co/mJPivu29' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: 'Se1.png', text: 'مقشر', url: 'https://iherb.co/QmK34cVe' },
                    { img: '11.jpg', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                    { img: '10.jpg', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' },
                    { img: 'N2.png', text: 'بلسم', url: 'https://iherb.co/Mv4QLsG' }
                ],
                special: [
                    { img: 'AR1.png',},
                    { img: 'AR3.png',},
                    { img: 'AR4.png',},
                    { img: 'AR5.png',},
                    { img: 'Day 5.png',}
                ]
            }
        }
    };

   
    const skinTypeKey = answers[1]; // Assuming the skin type question is the second one
    const skinType = recommendations[skinTypeKey.toLowerCase()].type;
    const morningRoutine = recommendations[skinTypeKey.toLowerCase()].morning;
    const nightRoutine = recommendations[skinTypeKey.toLowerCase()].night.routine;
    const specialRoutine = recommendations[skinTypeKey.toLowerCase()].night.special;

    document.getElementById('skin-type').textContent = skinType;

    const morningContainer = document.getElementById('morning-routine').querySelector('.products');
    const nightContainer = document.getElementById('night-routine').querySelector('.products');

    morningRoutine.forEach(product => {
        const productCard = createProductCard(product.img, product.text, product.url);
        morningContainer.appendChild(productCard);
    });

    nightRoutine.forEach(product => {
        const productCard = createProductCard(product.img, product.text, product.url);
        nightContainer.appendChild(productCard);
    });

    const specialContainer = document.createElement('div');
    specialContainer.classList.add('special-products');
    nightContainer.appendChild(specialContainer);

    specialRoutine.forEach(product => {
        const productCard = createSpecialProductCard(product.img, product.text);
        specialContainer.appendChild(productCard);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = button.getAttribute('data-url');
        });
    });
});

function createProductCard(imgSrc, text, url) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.src = imgSrc;
    card.appendChild(img);

    const h4 = document.createElement('h4');
    h4.textContent = text;
    card.appendChild(h4);

    const button = document.createElement('button');
    button.textContent = 'ADD TO CART';
    button.className = 'add-to-cart';
    button.setAttribute('data-url', url);
    card.appendChild(button);

    return card;
}

function createSpecialProductCard(imgSrc, text) {
    const card = document.createElement('div');
    card.className = 'special-product-card';

    const img = document.createElement('img');
    img.src = imgSrc;
    card.appendChild(img);

    const h4 = document.createElement('h4');
    h4.textContent = text;
    card.appendChild(h4);

    return card;
}
