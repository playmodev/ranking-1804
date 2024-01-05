# PlayMO ranking Lambda+React example
Plantilla de una app de Ranking en React + Lambda para una promoción de PlayMO

## Usage
- Crea un nuevo repositorio a través de este [enlace ](https://github.com/new?template_name=playmo-ranking-react-template)

- Clona el repositorio en tu espacio de trabajo
- Pide a desarrollo el endpoint de `/ranking` para la Promoción en concreto
- Instala dependencias con `npm i`
- Ejecuta `npm run init` para preparar los archivos locales
- Edita el archivo `.env` con los datos de nuestra Promoción
- Ejecuta `sls deploy` para provisionar los recursos en AWS. Esto puede tardar varios minutos.
- Ejecuta `npm run set-up` para configurar la URL de Lambda

### Development
`npm run dev` levanta un entorno de desarrollo completo en local

### Deployment
`npm run release` hace un despliegue completo

### Otros scripts
- `npm run web` levanta el servidor de desarrollo de la app React
- `npm run run-api-local` ejecuta el endpoint en nuestro entorno local
- `npm run deploy-api` despliega en endpoint en Lambda
- `npm run deploy-web` construye y despliega la app React en Cloudfront
- `sls domainInfo` muestra la URL de CloudFront
