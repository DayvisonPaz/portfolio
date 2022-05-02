// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const value = [
   {id:1,value:59.90,name:"tenis corrida ",desc:"tenis azul ideal para corridas",backdrop:'https://img.freepik.com/fotos-gratis/um-par-de-treinadores_144627-3798.jpg?w=740'}
  ,{id:2,value:99.90,name:"tenis cano alto",desc:"tenis cano alto detalhes em cinza",backdrop:'https://img.freepik.com/fotos-gratis/moda-sapatos-e-tenis_1203-7529.jpg?t=st=1650200005~exp=1650200605~hmac=5f9abf1b8988b8119c00e1d158e507d90170151152a32dcb968e13e3f8788c34&w=740'}
  ,{id:3,value:129.90,name:"tenis brilhoso",desc:"tenis preto em couro falso brilhoso ",backdrop:"https://img.freepik.com/fotos-gratis/moda-sapatos-e-tenis_1203-8063.jpg?w=740"}
  ,{id:4,value:49.90,name:"tenis corrida",desc:"Tênis cinza com detalhes em laranja esportivo",backdrop:"https://img.freepik.com/fotos-gratis/tenis-cinza-com-detalhes-em-laranja-em-um-fundo-branco-sapatos-esportivos_186673-3379.jpg?w=740"}
  ,{id:5,value:28.90,name:"tenis infantil",desc:"tenis infantil ideal para longo tempo de uso e confortavel",backdrop:'https://img.freepik.com/fotos-gratis/tenis-azul-com-cadarcos-laranja-sapatos-esportivos-em-fundo-branco_186673-3377.jpg?w=740'}
  ,{id:6,value:54.90,name:"verde florescente",desc:"tenis verde florescente esportivo, ideal para atletas",backdrop:"https://as2.ftcdn.net/v2/jpg/01/43/45/77/1000_F_143457749_3x7KtQlCL9sDzbRShBAPXLzHrNoZwF7q.jpg"}
  ,{id:7,value:69.90,name:"tenis social",desc:"tenis de couro marrom ideal para eventos elegantes e estilosos",backdrop:"https://img.freepik.com/fotos-gratis/sapatos-de-couro-marrom_1203-7562.jpg?t=st=1650200005~exp=1650200605~hmac=120784d5d3e0da2ba205b73db7151df268102ce28f21f1e03819904004c0e8ba&w=740"}
  ,{id:8,value:57.90,name:"tenis preto",desc:"tenis preto ideasl para corrida",backdrop:"https://img.freepik.com/fotos-gratis/calcado-desportivo-para-correr_1203-7549.jpg?w=740"}
  ,{id:9,value:189.90,name:"chinelo laranja",desc:"equipamento de tortura ideal para maes",backdrop:"https://img.freepik.com/fotos-gratis/flip-flops-par-amarelo-isolado-no-fundo-branco_1101-1998.jpg?t=st=1650200703~exp=1650201303~hmac=05e8850d2d523a726aa4fc598e8621881377c2d8d3623b3a15a52716156d5c75&w=740"}
 ,{id:10,value:234.90,name:"tenis laranja",desc:"tênis masculinos esportivos casuais de couro e camurça amarelos",backdrop:"https://img.freepik.com/fotos-gratis/novos-tenis-masculinos-esportivos-casuais-de-couro-e-camurca-amarelos-em-um-fundo-branco_555047-1455.jpg?w=740"}
 ,{id:11,value:150.90,name:"tenis preto",desc:"Tênis de outono dos homens curtos de couro preto",backdrop:"https://img.freepik.com/fotos-gratis/tenis-de-outono-dos-homens-curtos-de-couro-preto-em-um-fundo-branco-tenis-colecao-inverno-2022_173815-21182.jpg?w=740"}
 ,{id:12,value:89.90,name:"tenis rosa",desc:"Tênis de esporte feminino rosa em fundo rosa com reflexão",backdrop:"https://img.freepik.com/fotos-gratis/tenis-de-esporte-feminino-rosa-em-fundo-rosa-com-reflexao_367038-2330.jpg?w=740"}
 ,{id:13,value:69.90,name:"tenis azul",desc:"Tênis de corrida azul",backdrop:"https://img.freepik.com/fotos-gratis/tenis-de-corrida-azul-em-fundo-azul-close-up_77190-7652.jpg?w=740"}
 ,{id:14,value:79.90,name:"tenis colorido",desc:"tênis branco nike air force",backdrop:"https://img.freepik.com/fotos-gratis/foto-de-produto-de-tenis-branco-nike-air-force-1-x27-07-isolada-em-fundo-cinza-claro_488220-18218.jpg?w=740"}
 ,{id:15,value:59.90,name:"chuteira colorida",desc:"chuteira arco-iris",backdrop:"https://img.freepik.com/psd-gratuitas/esporte-sapato-mockup-isolado_1310-1627.jpg?w=740"}
 ,{id:16,value:88.90,name:"tenis branco",desc:"tenis branco de corrida",backdrop:"https://img.freepik.com/fotos-gratis/um-tenis-branco-isolado-no-branco_93675-133980.jpg?t=st=1650203593~exp=1650204193~hmac=31a909610f770299ce0c69b143b08839ff2741e50e0c46240581703136930011&w=740"}
 ,{id:26,value:82.90,name:"sapato marrom",desc:"sapato couro marrom e liso ideal para eventos elegantes",backdrop:"https://img.freepik.com/fotos-gratis/sapatos-marrons-isolados-no-fundo-branco-em-estudio_268835-1354.jpg?t=st=1650217052~exp=1650217652~hmac=4c430ae3d5d93781374509ad8f21f813ed550d355d331f367b9e3becbd2ea076&w=740",nothing:'https://pastelink.net/2he5h'}
 ,{id:17,value:79.90,name:"tenis vermelho",desc:"tenis vermelho de corrida",backdrop:"https://as2.ftcdn.net/v2/jpg/01/29/56/85/1000_F_129568549_D4xbovsuQ4Me6GfQJ3N5gxNKbZACu82x.jpg"}
 ,{id:18,value:169.90,name:"tenis azul",desc:"tenis azul ideal para corridas e longas caminhadas",backdrop:"https://img.freepik.com/fotos-gratis/tenis-isolados-em-uma-superficie-branca_93675-36716.jpg?w=740"}
 ,{id:28,value:369.90,name:"sapato marrom",desc:"sapato marrom escuro, um tanto quanto elegante para se sentir confortavel",backdrop:"https://as2.ftcdn.net/v2/jpg/00/78/65/17/1000_F_78651750_OpPsOQjJ7zeomw0Oji0VkJgGhug4LMuZ.jpg"}
 ,{id:19,value:99.90,name:"tenis cinza",desc:"Sapatos confortáveis com poros. Sapatos de borracha respiráveis",backdrop:"https://as1.ftcdn.net/v2/jpg/00/82/88/66/1000_F_82886619_a4xje5obM5bAajAjnx6ZzWb0Is70kSQA.jpg"}
 ,{id:20,value:58.90,name:"tenis preto",desc:"tenis all star preto, lindo alem de confortavel",backdrop:"https://as2.ftcdn.net/v2/jpg/03/93/79/85/1000_F_393798546_MC6h9apvOfUfKkIZ3AzG6o8RFfSPydUA.jpg"}
 ,{id:21,value:96.90,name:"tenis amarelo ",desc:"tenis amarelo ideal para corridas",backdrop:"https://as1.ftcdn.net/v2/jpg/02/09/82/26/1000_F_209822653_Fzoff04bZ8QHnseFCHy7vkLmWl1mIDHO.jpg"}
 ,{id:27,value:57.90,name:"sapato preto",desc:"sapato preto ideal para reunioes e eventos" ,backdrop:"https://as1.ftcdn.net/v2/jpg/02/73/42/42/1000_F_273424271_Pr1HQsa1pfKx04r8W65lBT1bTtuicqxs.jpg"}
 ,{id:22,value:86.90,name:"tenis cinza",desc:"tenis esportivo ideal para caminhadas longas",backdrop:"https://as1.ftcdn.net/v2/jpg/01/21/81/86/1000_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg"}
 ,{id:23,value:129.90,name:"tenis preto",desc:"tenis  esportivo preto",backdrop:"https://as1.ftcdn.net/v2/jpg/01/55/37/98/1000_F_155379822_DoDNtUFgHIePu4CqqTiOjVivJDx6eQMi.jpg"}
 ,{id:24,value:49.90,name:"tenis branco",desc:"tenis branco para corridas e muito estiloso",backdrop:"https://as2.ftcdn.net/v2/jpg/00/26/56/27/1000_F_26562704_jpMmMZVzsWiPhKmWT7oH5mKceLzNqPzQ.jpg"}
 ,{id:25,value:69.90,name:"sapato marrom",desc:'sapato couro amarelo ideal para eventos elegantes' ,backdrop:"https://as2.ftcdn.net/v2/jpg/02/74/49/61/1000_F_274496161_HI68vyljul1jgeAjjvCZzc6S8wNvQQQX.jpg"}]
export default function handler(req, res) {
  res.status(200).json(value)
}
