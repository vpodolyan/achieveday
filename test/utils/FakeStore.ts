const FakeStore = (state) => {
    return {
            default: () => {},
            subscribe: () => {},
            dispatch: () => {},
            getState: () => {
                return { ...state };
            }
    }
}

export default FakeStore
