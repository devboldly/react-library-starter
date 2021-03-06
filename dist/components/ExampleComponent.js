"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleComponent = void 0;
var React = __importStar(require("react"));
/**
 * See documentation: [ExampleComponent](https://justinmahar.github.io/react-kindling/ExampleComponent)
 *
 *
 */
function ExampleComponent(props) {
    return (React.createElement("div", { style: {
            padding: 10,
            border: 'solid 2px #0F52BA',
            color: '#0F52BA',
            backgroundColor: '#D9F1FF',
            display: 'inline-block',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            userSelect: 'none',
        } }, typeof props.text !== 'undefined' ? props.text : 'Example Component'));
}
exports.ExampleComponent = ExampleComponent;
ExampleComponent.defaultProps = {};
