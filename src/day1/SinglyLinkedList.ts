type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;

    private start?: Node<T>;
    private end?: Node<T>;

    constructor() {
        this.length = 0;
        this.start = this.end = undefined;
    }

    prepend(item: T): void {
        const old_start = this.start;

        this.start = { value: item } as Node<T>;
        this.start.next = old_start;

        this.length++;
    }

    insertAt(item: T, idx: number): void {

    }

    append(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (!this.start) {
            this.start = this.end = node;
            this.start.next = node;
            return;
        }

        if (this.end) {
            this.end.next = node;
            this.end = node;
            return;
        }
    }

    remove(item: T): T | undefined {
        let current = this.start;

        if (this.start?.value === item) {
            const to_remove = this.start;
            this.start = this.start.next
            this.length--;
            return to_remove.value;
        }

        for (let i = 0; i < this.length; i++) {
            if (current?.next?.value === item) {
                const to_remove = current.next;
                current = current.next?.next
                this.length--;
                return to_remove?.value;
            } else if (!current?.next) {
                return undefined
            }
            current = current.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        let current = this.start;

        for (let i = 0; i < this.length; i++) {
            if (i === idx) {
                return current?.value;
            } else if (!current?.next) {
                return undefined
            }
            current = current.next;
        }

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        let current = this.start;

        if (idx > this.length) return undefined;

        if (idx === 0) {
            const to_remove = this.start;
            this.start = this.start?.next;
            this.length--;
            return to_remove?.value;
        }

        for (let i = 0; i < this.length; i++) {
            if (idx - 1 === i && current) {
                const to_remove = current?.next;
                current.next = current?.next?.next
                this.length--;
                return to_remove?.value;
            }
            current = current?.next;
        }

        return undefined;
    }
}
