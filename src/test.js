const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function addUser() {
  await prisma.user.create({
    data: {
      firstName: "Maxime",
      lastName: "Durand",
      email: "magna94320@gmail.com",
    },
  });
}


module.exports = addUser;
