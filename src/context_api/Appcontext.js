import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
// import reducer from "./reducer";
import { dummyData } from "../utils/metaData";
import { useCookies } from "react-cookie";
import { storage } from "../utils/firebase";
import { v4 as uuid } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Axios1 from "../utils/axios1";
import Axios2 from "../utils/axios2";
import { navigate } from "gatsby";

const AppContext = createContext();
// -----------------------------------------------------
const AppProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(null);
  const [loading, setLoading] = useState(false);
   const [uploaded, setUploaded] = useState(false);
   const [ serverErr,setServerErr] = useState(false)
   const [ serverMsg,setServerMsg] = useState("")
  // ----------------------------functions for login-----------------------------------------
  const Login = async (payload) => {
    await Axios2.post("/login", payload)
      .then(async (res) => {
        await Axios1.post(
          "/user",
          {},
          { headers: { Authorization: `Bearer ${res.data.accesstoken}` } }
        )
          .then((res) => {
            setLoading(false);
            dispatch({ type: "ADD_USER", payload: res.data });
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  // -----------------------function for logout-----------------

  const Logout = async () => {
    await Axios2.get("/logout")
      .then((res) => {
        setLoading(false);
        dispatch({ type: "UPDATE_USER", payload: {} });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        dispatch({ type: "UPDATE_USER", payload: {} });
      });
  };
  // ----------------------------------------------PRODUCT UPLOAD

  const BlogUpload = (payload) => {
    setLoading(true);
    let images = [];

    // -----------------------------upload all images
    for (let i = 0; i < payload?.blog_image?.length; i++) {
      const imageref = ref(
        storage,
        `kella/${"kella_image_" + uuid()}`
      );
      uploadBytes(imageref, payload?.blog_image[i]).then(() => {
        getDownloadURL(imageref).then(async (url) => {
          images.push(url);

          if (images.length == payload?.blog_image?.length) {
            console.log(payload?.slug)
             setServerErr(false);
            await Axios2.post("/blog", {
              slug: payload?.slug,
              excerpt: payload?.excerpt,
              blog_title: payload?.blog_title,              
              blog_image: images,
              author:payload?.author,
              category: payload?.category,
              tag: payload?.tag,
              blog_content: payload?.blog_content,
            })
              .then((res) => {
                setLoading(false);
                setUploaded(true);
                setTimeout(() => {
                  setUploaded(false);
                }, 2000);
                console.log(res);
              })
              .catch((err) => {
                setLoading(false);
                console.log(err);
                if(err.response.data.err == "duplicate"){
setServerErr(true);setServerMsg("Slug name already exist");
                }
              });
          } else {
          }
        });
      });
    }
  };
  // ----------------------------------------------------------
  const advertUpload = (payload) => {
    setLoading(true);
    let images = [];

    // -----------------------------upload all images
    for (let i = 0; i < payload?.ads_image?.length; i++) {
      const imageref = ref(
        storage,
        `gloor_advertss/${"gloor_advert_img_" + uuid()}`
      );
      uploadBytes(imageref, payload?.ads_image[i]).then(() => {
        getDownloadURL(imageref).then(async (url) => {
          images.push(url);

          if (images.length == payload?.ads_image?.length) {
            await Axios2.post("/advert", {
              slug: payload?.slug,
              product_tag: payload?.product_tag,
              product_name: payload?.product_name,
              description: payload?.description,
              price: payload?.price,
              affiliate_ref: payload?.affiliate_ref,
              side_hero: payload?.side_hero,
              product_image: images,
            })
              .then((res) => {
                setLoading(false);
                setUploaded(true);
                setTimeout(() => {
                  setUploaded(false);
                }, 2000);
                console.log(res);
              })
              .catch((err) => {
                setLoading(false);
                console.log(err);
              });
          } else {
          }
        });
      });
    }
  };
  // ---------------------------------------getting all products--
  const GetBlogs = async () => {
    await Axios2.get("/blogs")
      .then((res) => {
        dispatch({ type: "UPDATE_BLOG", payload: res.data });
      })
      .catch((err) => {
        return null;
      });
  };
  // -------------------*
  useEffect(() => {
    GetBlogs();
  }, []);
  // ----------------------------------------------------
  const Refresh = async () => {
    await Axios2.get("/refresh")
      .then(async (res) => {
        await Axios1.post(
          "/user",
          {},
          { headers: { Authorization: `Bearer ${res.data.token}` } }
        )
          .then((res) => {
            setLoading(false);
            dispatch({ type: "ADD_USER", payload: res.data });
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            dispatch({ type: "UPDATE_USER", payload: {} });
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        dispatch({ type: "UPDATE_USER", payload: {} });
      });
  };
  useEffect(() => {
    Refresh();
  }, []);
  // -----------------------------------------------------------------------------------
  let initialState = {
    user: cookies.KELLA_USER || {},
    blogs: cookies.KELLA_BLOGS || [],
    adverts: cookies.KELLA_ADVERTS || [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        {
          return state;
        }
        break;
      case "LOGIN":
        {
          setLoading(true);
          Login(action.payload);
          return state;
        }

        break;
      case "ADD_USER":
        {
          const { email, firstname, lastname, role } = action.payload.user;
          state.user = { email, firstname, lastname, role };
          setCookie("KELLA_USER", { email, firstname, lastname, role });
          return state;
        }
        break;
      case "LOG_OUT":
        {
          setLoading(true);
          Logout(action.payload);
          return state;
        }

        break;

      case "UPDATE_USER":
        {
          state.user = {};
          setCookie("KELLA_USER", {});
          // navigate("/");
          return state;
        }

        break;
      case "UPLOAD_BLOG":
        {
          BlogUpload(action.payload);
          return state;
        }
        break;
      case "UPLOAD_ADVERT":
        {
          advertUpload(action.payload);
          return state;
        }
        break;

      case "UPDATE_BLOG":
        {
          state.blogs = action.payload.blogs;
          setCookie("KELLA_BLOGS", action.payload.blogs);
          return state;
        }
        break;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(()=>{console.log("state changed",cookies)},[cookies])
  // ------------------END OF REDUCER FUNCTION---------------------------------
  // const data = state.products;
  // const [productlist, setProductlist] = useState(data);
  const ProductPagination = (data, limit) => {
    let x = limit;
    let limits = [];
    let products = [];
    const pages = [];

    for (let i = 1; i <= data.length; i++) {
      let index = x * i;
      limits[i - 1] = index;
    }

    for (let i = 0; i < limits.length; i++) {
      let start = limits[i];
      let end = limits[i + 1];
      if (start == limit) {
        let selected = data.filter((product, index) => index < start);
        products = [...products, [...selected]];
      } else {
        let selected = data.filter(
          (product, index) => index >= start - limit && index <= end - limit - 1
        );
        products = [...products, [...selected]];
      }
    }

    return products.filter((item, index) => item.length != 0);
  };
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        cookies,
        loading,
        ProductPagination,
        serverMsg,
        serverErr,
        setServerErr,
        setServerMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
