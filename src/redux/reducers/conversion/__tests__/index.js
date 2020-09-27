import conversion, {initialState} from ".."
import { ERROR, LOADED, LOADING } from "../../../middleware/actions"
import { RATES } from "../actions"

describe("conversion reducer", () => {
  it("should return the initial state", () => {
    const result = expect(conversion(undefined, {}))
    result.toEqual(initialState)
    result.toMatchSnapshot()
  })
  it("should handle GET_REQUEST_START", () => {
    const result = expect(
      conversion(undefined, { 
        type: RATES+LOADING,
        request:{
          type:"get",
          url:"/latest"
        }
      })
    )
    result.toEqual({
      ...initialState,
      rates:{
        ...initialState.rates,
        loader:true
      }
    })
    result.toMatchSnapshot()
  })
  it("should handle GET_REQUEST_SUCCESS", () => {
    const result = expect(
      conversion(undefined, {
        type: RATES+LOADED,
        request:{
          type:"get",
          url:"/latest"
        }
      })
    )
    result.toEqual({
      ...initialState,
      rates:{
        ...initialState.rates,
        loader:false,
        data:[]
      }
    })
    result.toMatchSnapshot()
  })
  it("should handle GET_REQUEST_FAIL", () => {
    const result = expect(
      conversion(undefined, {
        type: RATES+ERROR,
        request:{
          type:"get",
          url:"/latest/asdf"
        }
      })
    )
    result.toEqual({
      ...initialState,
      rates:{
        ...initialState.rates,
        loader:false,
        loadingError:undefined
      }
    })
    result.toMatchSnapshot()
  })
})
