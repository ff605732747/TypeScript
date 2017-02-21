/// <reference path="../typings/index.d.ts" />

/**
 * 泛型
 */
class User {
    name: string;
    age: number;
}

class Order {
    id: number;
    total: number;
    items: any[];
}

function getEntities<T>(url: string, cb: (list: T[]) => void): void {
    $.ajax({
        url: url,
        method: "GET",
        success: function (data) {
            cb(data);
        },
        error: function (error) {
            cb(null);
        }
    });
}