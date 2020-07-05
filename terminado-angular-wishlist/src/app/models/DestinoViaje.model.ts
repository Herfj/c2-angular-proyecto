export class DestinoViaje {
    private selected: boolean;
    public nombre: string;
    public desc: string;
    public servicios: string[];


    constructor(n: string, des: string) {
        this.nombre = n;
        this.desc = des;
        this.servicios = ['piletas', 'desayuno'];
    }


    isSelected() {
        return this.selected;
    }

    setSelected(b: boolean) {
        this.selected = b;
    }


}
