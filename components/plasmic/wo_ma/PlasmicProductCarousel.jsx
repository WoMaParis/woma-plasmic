// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vNYHYdba5dDm6wfqFaSoQa
// Component: CrcwKld3WEeO
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { ProductBox } from "@plasmicpkgs/commerce";
import { ProductTextField } from "@plasmicpkgs/commerce";
import { ProductPriceComponent } from "@plasmicpkgs/commerce";
import LinkButton from "../../LinkButton"; // plasmic-import: 6vEjUyLNvQQ4/component
import { ProductMedia } from "@plasmicpkgs/commerce";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_wo_ma.module.css"; // plasmic-import: vNYHYdba5dDm6wfqFaSoQa/projectcss
import sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: CrcwKld3WEeO/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: HMeuGOtCs6PN/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: hnGxlFHfWsc7/icon

createPlasmicElementProxy;

export const PlasmicProductCarousel__VariantProps = new Array("slider");

export const PlasmicProductCarousel__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "slider",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.slider
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <ProductBox
        data-plasmic-name={"productBox"}
        data-plasmic-override={overrides.productBox}
        className={classNames("__wab_instance", sty.productBox, {
          [sty.productBoxslider_second]: hasVariant($state, "slider", "second"),
          [sty.productBoxslider_third]: hasVariant($state, "slider", "third")
        })}
        id={
          hasVariant($state, "slider", "third")
            ? "valvet-accent-arm-chair"
            : hasVariant($state, "slider", "second")
            ? "mapple-wood-accent-chair"
            : "cloth-covered-accent-chair"
        }
      >
        <ph.DataCtxReader>
          {$ctx => (
            <React.Fragment>
              <div className={classNames(projectcss.all, sty.freeBox__rydE)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wdIbk, {
                    [sty.freeBoxslider_first__wdIbku2ZcJ]: hasVariant(
                      $state,
                      "slider",
                      "first"
                    ),
                    [sty.freeBoxslider_second__wdIbkTmmwE]: hasVariant(
                      $state,
                      "slider",
                      "second"
                    ),
                    [sty.freeBoxslider_third__wdIbk2YeMh]: hasVariant(
                      $state,
                      "slider",
                      "third"
                    )
                  })}
                >
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Great Design Collection"}
                  </div>
                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField__vostz
                    )}
                    field={"name"}
                  />

                  <ProductTextField
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField___4EPeZ
                    )}
                    field={"description"}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__bZni)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__mvJik)}
                    />

                    <ProductPriceComponent
                      data-plasmic-name={"productPrice"}
                      data-plasmic-override={overrides.productPrice}
                      className={classNames("__wab_instance", sty.productPrice)}
                    />
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__b8Xy)}
                  >
                    <LinkButton
                      className={classNames(
                        "__wab_instance",
                        sty.linkButton__sLiOx
                      )}
                      text={"\u2295 Add to cart"}
                      type={"solidOrange"}
                    />

                    <LinkButton
                      className={classNames(
                        "__wab_instance",
                        sty.linkButton___4Gmgv
                      )}
                      text={"More Info"}
                      type={"blankOrange"}
                    />
                  </p.Stack>
                </p.Stack>
                <div
                  className={classNames(projectcss.all, sty.freeBox___9OeF2)}
                >
                  <ProductMedia
                    data-plasmic-name={"productMedia"}
                    data-plasmic-override={overrides.productMedia}
                    className={classNames("__wab_instance", sty.productMedia, {
                      [sty.productMediaslider_second]: hasVariant(
                        $state,
                        "slider",
                        "second"
                      )
                    })}
                  />
                </div>
              </div>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wRsjK)}
              >
                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant($state, "slider", "third")
                      ? CircleOIcon
                      : hasVariant($state, "slider", "second")
                      ? CircleOIcon
                      : DotCircleOIcon
                  }
                  className={classNames(projectcss.all, sty.svg___6GRt, {
                    [sty.svgslider_second___6GRtTmmwE]: hasVariant(
                      $state,
                      "slider",
                      "second"
                    ),
                    [sty.svgslider_third___6GRt2YeMh]: hasVariant(
                      $state,
                      "slider",
                      "third"
                    )
                  })}
                  role={"img"}
                />

                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant($state, "slider", "second")
                      ? DotCircleOIcon
                      : CircleOIcon
                  }
                  className={classNames(projectcss.all, sty.svg__w4VoM, {
                    [sty.svgslider_first__w4VoMu2ZcJ]: hasVariant(
                      $state,
                      "slider",
                      "first"
                    ),
                    [sty.svgslider_second__w4VoMTmmwE]: hasVariant(
                      $state,
                      "slider",
                      "second"
                    ),
                    [sty.svgslider_third__w4VoM2YeMh]: hasVariant(
                      $state,
                      "slider",
                      "third"
                    )
                  })}
                  role={"img"}
                />

                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant($state, "slider", "third")
                      ? DotCircleOIcon
                      : CircleOIcon
                  }
                  className={classNames(projectcss.all, sty.svg__fMmLw, {
                    [sty.svgslider_third__fMmLw2YeMh]: hasVariant(
                      $state,
                      "slider",
                      "third"
                    )
                  })}
                  role={"img"}
                />
              </p.Stack>
            </React.Fragment>
          )}
        </ph.DataCtxReader>
      </ProductBox>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "productBox", "text", "productPrice", "productMedia"],
  productBox: ["productBox", "text", "productPrice", "productMedia"],
  text: ["text"],
  productPrice: ["productPrice"],
  productMedia: ["productMedia"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProductCarousel__ArgProps,
          internalVariantPropNames: PlasmicProductCarousel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productBox: makeNodeComponent("productBox"),
    text: makeNodeComponent("text"),
    productPrice: makeNodeComponent("productPrice"),
    productMedia: makeNodeComponent("productMedia"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
