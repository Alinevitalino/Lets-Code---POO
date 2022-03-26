class Tv {
    canal = {
        atual: 0,
        2: "Record",
        5: "SBT",
        7: "Band",
        12: "Globo",
    };

    volume = {
        min: 0,
        atual: 0,
        max: 20
    };

    estado = "desligada";

    liga() {
        if (this.estado == "ligada") {
            return "A TV já está ligada!"
        }

        return this.estado = "ligada";
    }

    desliga() {
        if (this.estado == "desligada") {
            return "A TV já está desligada!"
        }

        return this.estado = "desligada";
    }

    mudaCanal(numero) {
        if (this.estado === "desligada") {
            return "A TV está desligada, por favor ligue-a primeiro";
        }

        if (numero === 2) {
            return this.canal[2];
        } else if (numero === 5) {
            return this.canal[5];
        } else if (numero === 7) {
            return this.canal[7];
        } else if (numero === 12) {
            return this.canal[12];
        }

        return "Canal inválido";
    }

    aumentaVolume(value = 1) {
        if (this.estado === "desligada") {
            return "A TV está desligada, por favor ligue-a primeiro";
        }

        this.volume.atual += value;

        if (this.volume.atual > this.volume.max) {
            console.log("O volume já está no máximo!")
            return this.volume.atual = this.volume.max;
        }

        return this.volume.atual;
    }

    diminuiVolume(value = 1) {
        if (this.estado === "desligada") {
            return "A TV está desligada, por favor ligue-a primeiro";
        }

        this.volume.atual -= value;

        if (this.volume.atual < this.volume.min) {
            console.log("O volume já está no mínimo!")
            return this.volume.atual = this.volume.min;
        }

        return this.volume.atual;
    }
}

const novaTV = new Tv();
console.log(novaTV)