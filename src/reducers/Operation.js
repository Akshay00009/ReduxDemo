export const getInitialValue = () => ({ ReturnValue: 0 });

export default function operation(state, action) {
    if (typeof state === "undefined") {
        return getInitialValue();
    }
    switch (action.type) {
        case 'Increament':
            return {
                ReturnValue: state.ReturnValue + 1
            }

        case 'Decreament':
            return {
                ReturnValue: state.ReturnValue - 1
            }

        case 'Reset':
            return getInitialValue()

        default:
            return state;
    }
}