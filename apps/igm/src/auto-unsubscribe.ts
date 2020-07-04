/*
  Decorator to automatically unsubscribe from all Observable types on a class
  when ngOnDestroy is invoked

  An Observable type is defined here as a property with a fn named 'unsubscribe'

  The original ngOnDestroy is then also invoked
 */
export function AutoUnsubscribe(constructor) {

  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function() {
    for (const prop in this) {
      const property = this[prop];
      if (property && (typeof property.unsubscribe === 'function')) {
        property.unsubscribe();
      }
    }
    if (original && typeof original === 'function') {
      original.apply(this, arguments);
    }
  };

}
