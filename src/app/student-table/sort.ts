export class Sort {

    private sortOrder = 1;
    constructor() {
    }

    public startSort(property: string, order: string) {
        if (order == "default") {
            this.sortOrder = 1;
        }
        else if (order == "asc") {
            this.sortOrder = -1;
        }
        return (a: any, b: any) => {
                return this.sortData(a[property], b[property]);
        }
    }

    private sortData(a: any, b: any) {
        if (a < b) {
            return -1 * this.sortOrder;
        } else if (a > b) {
            return 1 * this.sortOrder;
        } else {
            return 0 * this.sortOrder;
        }
    }
}