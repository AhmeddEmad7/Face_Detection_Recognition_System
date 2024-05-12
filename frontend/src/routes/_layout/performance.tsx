import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/performance")({
  component: PerformancePage,
});

const performanceMetrics = [
  { name: "Accuracy", value: 0.9907407407407407 },
  { name: "Precision", value: 0.9930555555555556 },
  { name: "Recall", value: 0.9907407407407407 },
  { name: "F1 Score", value: 0.9904761904761904 },
  { name: "ROC-AUC Score", value: 0.9992063492063492 },
];

export function PerformancePage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div className="flex pb-5 items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            System Performance
          </h2>
          <p className="text-muted-foreground">
            Monitor the performance of the system using various metrics
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline">
            Performance Metrics
          </p>

          <p className="mt-3 text-sm text-gray-500 md:text-sm">
            Model evaluation metrics are essential tools in assessing the
            performance of machine learning models. Here's a brief overview of
            some commonly used metrics:
            <ul className="space-y-3 py-4">
              <li>
                <b>Accuracy</b> - Measures correct classifications over total
                instances. Simple but may not suit imbalanced data.
              </li>
              <li>
                <b>Precision</b> - Measures the proportion of true positives to
                all positive predictions.
              </li>
              <li>
                <b>Recall</b> - Measures the proportion of true positives to all
                actual positives.
              </li>
              <li>
                <b>F1 Score</b> - Harmonic mean of precision and recall. Useful
                for imbalanced data.
              </li>
              <li>
                <b>ROC-AUC Score</b> - Area under the Receiver Operating
                Characteristic curve. Measures the ability of a model to
                distinguish between classes.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <div className="relative overflow-x-auto md:mt-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Metric
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((metric) => (
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {metric.name}
                    </th>
                    <td className="px-6 py-4">{metric.value.toFixed(3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline">
            Confusion Matrix
          </p>

          <p className="mt-3 text-sm text-gray-500 md:text-sm">
            The confusion matrix is a fundamental tool in evaluating the
            performance of classification models. It provides a comprehensive
            breakdown of the model's predictions by comparing them to the actual
            class labels. <br /> <br />
            The matrix is organized into four quadrants: true positives
            (correctly predicted positive instances), true negatives (correctly
            predicted negative instances), false positives (incorrectly
            predicted as positive when they are actually negative), and false
            negatives (incorrectly predicted as negative when they are actually
            positive).
            <br /> <br />
            By examining these elements, practitioners gain insights into the
            model's strengths and weaknesses, particularly in terms of precision
            and recall.
            <br /> <br /> Moreover, the confusion matrix serves as the basis for
            calculating various performance metrics, such as accuracy,
            precision, recall, and F1 score, enabling informed decision-making
            in refining and optimizing machine learning models.
          </p>
        </div>
        <div>
          <img src="/images/confusion_matrix.png" alt="Confusion Matrix" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline">
            ROC Curves
          </p>

          <p className="mt-3 text-sm text-gray-500 md:text-sm">
            The Receiver Operating Characteristic (ROC) curve is a graphical
            representation of a binary classifier's performance across various
            thresholds. It illustrates the trade-off between true positive rate
            (sensitivity) and false positive rate (1 - specificity) for
            different threshold values.
            <br /> <br />
            The area under the ROC curve (AUC-ROC) is a common metric used to
            evaluate the performance of binary classifiers. AUC-ROC ranges from
            0 to 1, with higher values indicating better model performance.
            <br /> <br />
            ROC curves are particularly useful for assessing the predictive
            power of models, comparing different classifiers, and selecting
            optimal threshold values for specific use cases.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <img src="/images/roc_curves.png" alt="ROC Curve" />
        </div>
      </div>
    </div>
  );
}
