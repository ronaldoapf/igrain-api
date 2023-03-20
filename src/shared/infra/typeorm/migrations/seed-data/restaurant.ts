import { v4 as uuid } from 'uuid';

export const restaurantList = [
  {
    id: uuid(),
    name: 'Sem futuro',
    description: 'Escolha o que quiser e leve em dobro pelo preço de um',
    image:
      'https://scontent.fudi5-1.fna.fbcdn.net/v/t39.30808-6/300589964_389596546687756_6300848903950766194_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ihVBABXPYWYAX_h8M4H&_nc_ht=scontent.fudi5-1.fna&oh=00_AfCSaZHvCb1-weSH9Va9Gq14tQp4h1ebMtFiziAubLGTwQ&oe=641B5980',
    dishes: [
      {
        id: uuid(),
        name: 'Strogonoff de frango',
        description: 'Arroz, estrogonofe de frango, champignon e batata palha.',
        unitPrice: 25,
        image:
          'https://pngimage.net/wp-content/uploads/2018/06/strogonoff-png-3-300x200.png',
      },
      {
        id: uuid(),
        name: 'Bife à cavalo',
        description: 'Arroz, batata frita, bife e feijão.',
        unitPrice: 25,
        image:
          'https://i0.wp.com/files.agro20.com.br/uploads/2019/12/Bife-a-cavalo-2.jpg?resize=600%2C338&ssl=1',
      },
      {
        id: uuid(),
        name: 'Feijoada',
        description: 'O prato acompanha arroz, feijoada, farinha e couve.',
        unitPrice: 25,
        image: 'https://img.cybercook.com.br/receitas/776/feijoada.jpeg',
      },
    ],
  },
  {
    id: uuid(),
    name: 'Jilo com pimenta',
    description: 'As melhores quentinhas você só encontra aqui.',
    image:
      'https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/f75cd71a-85cf-4a99-8577-5c4580ce46fd/201911070904_Keae_i.png',
    dishes: [
      {
        id: uuid(),
        name: 'Strogonoff de frango',
        description:
          'O prato acompanha arroz, estrogone de frango, champingnon e batata palha.',
        unitPrice: 25,
        image:
          'https://pngimage.net/wp-content/uploads/2018/06/strogonoff-png-3-300x200.png',
      },
      {
        id: uuid(),
        name: 'Risoto de Camarão',
        description: 'Arroz cremoso com pedaços de camarão',
        unitPrice: 25,
        image:
          'https://reidocamaraomg.com.br/wp-content/uploads/2021/08/risoto-imagem1.png',
      },
      {
        id: uuid(),
        name: 'Feijoada',
        description: 'O prato acompanha arroz, feijoada, farinha e couve.',
        unitPrice: 25,
        image: 'https://img.cybercook.com.br/receitas/776/feijoada.jpeg',
      },
    ],
  },
  {
    id: uuid(),
    name: 'Espetinho de gato',
    description: 'Coma o melhor espetinho de gato da cidade',
    image:
      'https://scontent.fudi5-1.fna.fbcdn.net/v/t39.30808-6/300258007_392389329714124_2904024381847156065_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5Gw_gqsnpN8AX_CKd-w&_nc_ht=scontent.fudi5-1.fna&oh=00_AfAqhPDqJQgc-Y-f9w0BhGPYJnNU2GQ7FZW_ps76j2NFLw&oe=641C278E',
    dishes: [
      {
        id: uuid(),
        name: 'Lombo',
        description:
          'O prato acompanha 1 espetinho de lombo, mandioca e vinagrete.',
        unitPrice: 10,
        image: 'https://tudonoespeto.com.br/img/espeto-lombo.png',
      },
      {
        id: uuid(),
        name: 'Espetinho de picanha.',
        description:
          'O prato acompanha 1 espetinho de picanha, mandioca e vinagrete.',
        unitPrice: 25,
        image: 'https://tudonoespeto.com.br/img/espeto-picanha.png',
      },
      {
        id: uuid(),
        name: 'Frango',
        description:
          'O prato acompanha 1 espetinho de filé de frango, mandioca e vinagrete.',
        unitPrice: 25,
        image: 'https://tudonoespeto.com.br/img/espeto-file-frango.png',
      },
    ],
  },
];
