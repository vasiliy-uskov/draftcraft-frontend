import {IToolsFactory} from "../../_common/components/workspace/tools/IToolsFactory";
import {BaseTool} from "../../_common/components/workspace/tools/BaseTool";
import {ToolCreator} from "../../_common/components/workspace/tools/ToolCreator";

class ToolsFactory implements IToolsFactory {
    createTools(toolFactory: ToolCreator): Array<BaseTool> {
        return [
            toolFactory.createLineTool(),
            toolFactory.createCompassTool(),
            toolFactory.createDotTool()
        ];
    }
}

export {ToolsFactory};