import { useThemeContext } from "../theme.jsx";
import classNames from "classnames";
import { ThemeIndicator } from "./theme-indicator.jsx";

export function Card(props) {
    const { theme } = useThemeContext();

    return (
        <div
            className={classNames(
                "flex flex-col w-full justify-between h-full"
            )}
            style={{ backgroundColor: theme.cardBGColor }}
        >
            <div
                className={
                    "p-12 flex-1 flex flex-col relative items-start justify-center font-breaking-bad text-3xl"
                }
            >
                <div className={"absolute right-2 top-2"}>
                    <ThemeIndicator onClick={props.handleSwitch} />
                </div>
            </div>
        </div>
    );
}
