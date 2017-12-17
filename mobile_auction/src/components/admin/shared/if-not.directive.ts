import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[ifNot]'
})
export class IfNotDirective {
    constructor(
        private templateRef: TemplateRef<any>, 
        private viewContainer: ViewContainerRef
    ) {}

    @Input() set ifNot (condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

}
