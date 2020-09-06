export const myMixin = {
  name: 'chintu',
  sayHello() {
    this.sayHi(this.name);
  },
  sayHi(name: string) {
    // tslint:disable-next-line: no-console
    console.log(`>> Hi `, name);
  },
};

myMixin.sayHello();
