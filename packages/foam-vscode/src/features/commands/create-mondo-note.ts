import { commands, ExtensionContext } from 'vscode';
import { getMondoTemplateUri, NoteFactory } from '../../services/templates';
import { Resolver } from '../../services/variable-resolver';

export default async function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand(
      'foam-vscode.create-mondo-note',
      async () => {
        console.log("bonke boenke");
        const templateUri = await getMondoTemplateUri();

        if (templateUri) {
          const resolver = new Resolver(new Map(), new Date());

          await NoteFactory.createFromTemplate(templateUri, resolver);
        }
      }
    )
  );
}
