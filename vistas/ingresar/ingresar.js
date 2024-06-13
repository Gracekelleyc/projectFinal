
      //arreglo de usuarios tipo base datos
      usuarios = [
        [
          {
            user: "karla",
            clave: "123",
          },
        ],
        [
          {
            user: "grace",
            clave: "1234",
          },
        ],
        [
          {
            user: "jose",
            clave: "123",
          },
        ],
        [
          {
            user: "leonardo",
            clave: "123",
          },
        ],
        [
          {
            user: "banegas",
            clave: "123",
          },
        ],
      ];

      /* comparamos los datos que el usuario ingreso con los datos de la base de datos */
      $(".ingresar").click(function () {
        entro = 0;
        /* Obteniendo datos de las entradas */
        usuario = $(".usuario").val();
        clave = $(".clave").val();

        for (let index = 0; index < 5; index++) {
          if (
            usuarios[index][0].user == usuario &&
            usuarios[index][0].clave == clave
          ) {
            alert("Bienvenido al sistema");
            entro = 1;
          }
        }
        if (entro == 0) {
          alert("usuario no existe");
        }

        /* $(".clave").text(); */
      });