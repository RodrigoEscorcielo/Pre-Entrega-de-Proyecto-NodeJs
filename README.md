# Requerimientos del Proyecto

Requerimiento #1: Configuración Inicial:
1) Agrega la propiedad "type": "module".
2) Configura un script llamado start.

Requerimiento #2: Lógica de Gestión de Productos:
1) Consultar Todos los Productos.
  npm run start GET products
2) Consultar un Producto Específico.
  npm run start GET products/< productId>
3) Crear un Producto Nuevo.
  npm run start POST products <title> <price> <category>
4) Eliminar un Producto.
  npm run start DELETE products/< productId>
