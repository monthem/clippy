import Main from '@screens/Main';
import { defineCustomRoute } from '@utils/router';

const routes = {
  Main: defineCustomRoute({
    devName: "메인",
    component: Main,
    params: undefined,
  })
}

export default routes;